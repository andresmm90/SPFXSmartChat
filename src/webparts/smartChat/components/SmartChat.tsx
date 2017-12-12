import * as React from 'react';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Image,TextField } from 'office-ui-fabric-react/lib';
import styles from './SmartChat.module.scss';
import { ISmartChatProps } from './ISmartChatProps';
import { escape } from '@microsoft/sp-lodash-subset';

const logo: any = require('../assets/smart-chat.png');

export default class SmartChat extends React.Component<ISmartChatProps, {}> {
  public render(): React.ReactElement<ISmartChatProps> {
    return (
      <div className={ styles.smartChat}>
        <div className={"ms-Grid-row " + styles.header}>
          <div className={"ms-Grid-col ms-md12"}>
            <Image className={styles.logo} src={logo} alt='Example implementation with no image fit property and no height or width is specified.' /> 
          </div>
         
        </div>
         <div className={"ms-Grid-row"}>
          <div className="ms-Grid-col ms-md12">
            <TextField
              autoAdjustHeight
            />
          </div>          
         </div>
         <div className={"ms-Grid-row " + styles.button}>
          <DefaultButton
              primary={ true }
              data-automation-id='test'              
              text='Enviar'
            />
          </div>
      </div>
    );
  }
}
