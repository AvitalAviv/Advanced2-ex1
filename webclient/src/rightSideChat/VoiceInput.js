import { useRef, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import Message from '../users/message/Message';

/**
 * voice option sending function
 * @param {user,db} props 
 * @returns - new voice message
 */
function VoiceInput(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [stream, setStream] = useState({
    access: false,
    recorder: null,
    error: ""
  });

  const [recording, setRecording] = useState({
    active: false,
    available: false,
    url: ""
  });

  const chunks = useRef([]);

  function getAccess() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((mic) => {

      let mediaRecorder;

      try {
        mediaRecorder = new MediaRecorder(mic, {
          mimeType: "audio/webm"
        });
      } catch (err) {
        console.log(err);
      }

      const track = mediaRecorder.stream.getTracks()[0];
      track.onended = () => console.log("ended");

      mediaRecorder.onstart = function () {
        setRecording({
          active: true,
          available: false,
          url: ""
        });
      };

      mediaRecorder.ondataavailable = function (e) {
        chunks.current.push(e.data);
      };

      mediaRecorder.onstop = async function () {
        const url = URL.createObjectURL(chunks.current[0]);
        chunks.current = [];

        setRecording({
          active: false,
          available: true,
          url
        });
      };

      setStream({
        ...stream,
        access: true,
        recorder: mediaRecorder
      });
    })
      .catch((error) => {
        console.log(error);
        setStream({ ...stream, error });
      });
  }

  //add the video message to the current chat db
  const SubmitVoice = () => {
    var current = new Date();
    var time_now = current.getHours() + ':' + current.getMinutes();
    var new_message = new Message(props.User.nick_name, "audio", recording.url, time_now);
    props.selected.messages.push(new_message);
    props.setSelected([props.selected].concat([]));
    setShow(false);
  }


  return (
    <>
      <button type="button" onClick={handleShow} className="btn btn-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
        </svg>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Video Audio</Modal.Title>
        </Modal.Header>
        <Modal.Body className='align-self-center d-flex flex-row'>
          <div className='align-self-center d-flex flex-row'>
            {stream.access ? (
              <div className="audio-container">
                <button type="button" className="btn btn-light" onClick={() => !recording.active && stream.recorder.start()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                  </svg>
                </button>
                <button type="button" className="btn btn-light" onClick={() => stream.recorder.stop()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stop" viewBox="0 0 16 16">
                    <path d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z" />
                  </svg>
                </button>
                <br></br>
                {recording.available && <audio controls src={recording.url} />} <br></br>
                <button type="button" onClick={SubmitVoice} className="btn btn-secondary">Submit</button>
              </div>
            ) : (
              <button type="button" className="btn btn-light" onClick={getAccess}>Press Here to start record </button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VoiceInput;