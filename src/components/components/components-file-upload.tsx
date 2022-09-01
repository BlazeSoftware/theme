import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-file-upload',
})
export class ComponentsFileUpload {
  render() {
    return (
      <blaze-file-upload drop multiple>
        Drop to upload your files
      </blaze-file-upload>
    );
  }
}
