import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';




const  ContactForm = () => {

  return (
  <>
    <div className='contacthome'>
      <div className='adress'>
        <div className='messaget'>
          <div className='contacta' >
            <WhatsAppIcon className="iconsvgw" />
            <a className='whatsapp'>WhatsApp</a>
          </div>
        </div>
        <div className='messaget'>
          <div className='contacta' >
            <TelegramIcon className="iconsvgt" />
            <a className='telegram' href="https://t.me/bek_2466">Telegram</a>
          </div>
        </div>
        <div className='messaget'>
          <div className='contacta' >
            <GitHubIcon className='iconsvgg' />
            <a className='gitgub'>GitHub</a>

          </div>
        </div>
        <div className='messaget'>
          <div className='contacta'   > 
            <YouTubeIcon className="iconsvgy" />
            <a className='youtube' href="https://www.youtube.com/channel/UCVQhWPcdXmYRcSTzBs6iCFQ">YouTube</a>
          </div>
          </div>
        
        
      </div>
      <div className='chiziq'></div>
      <div className='formpage'>
        <div className="form-group">
          <label htmlFor="name" className='label1'>
            Your Name
            <input className='input1'
              type="text"
              id="name"
              name="name"
            
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email" className='label1'>
            Your Email
            <input className='input1'
              type="email"
              id="email"
              name="email"
      
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message" className='label1'>
            Your message
            <textarea className='textarea1'
              type="text"
              id="message"
              name="message"
            
            />
          </label>
        </div>
        <div className='button-send'>
          <a className='buttonsend'>Send</a>
          <SendIcon className='icon-send'/>
        </div>
        </div>
      </div>
  </>
  );
}
export default ContactForm;
