/**
 * Created by alucas on 26/11/16.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { AutocompleteEditor } from '../';
import { EditorState } from 'draft-js';

export class StoryComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
      autocompleteState: null,
    };
    this.onChange = (editorState) => this.setState({
      editorState,
    });
    this.onAutocompleteChange = (autocompleteState) => this.setState({
      autocompleteState,
    });
  }

  render() {
    return (
      <div>
        <AutocompleteEditor
          editorState={
            this.state.editorState
          }
          onChange={
            this.onChange
          }
          onAutocompleteChange={
            this.onAutocompleteChange
          }
        />
      </div>
    );
  }
}

storiesOf('AutoCompleteEditor', module)
  .add('single', () => (
    <div className="container">
      <StoryComponent />
    </div>
  ));
