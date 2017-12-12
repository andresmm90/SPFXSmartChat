import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SmartChatWebPartStrings';
import SmartChat from './components/SmartChat';
import { ISmartChatProps } from './components/ISmartChatProps';

export interface ISmartChatWebPartProps {
  description: string;
}

export default class SmartChatWebPart extends BaseClientSideWebPart<ISmartChatWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISmartChatProps > = React.createElement(
      SmartChat,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }

  protected prueba():void{
    alert("clic");
  }
}
