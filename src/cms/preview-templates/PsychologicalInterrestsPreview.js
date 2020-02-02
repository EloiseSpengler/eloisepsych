import React from 'react'
import PropTypes from 'prop-types'
import { PsychologicalInterrestsPageTemplate } from '../../templates/psychologicalinterrests-page'

const PsychologicalInterrestsPagePreview = ({ entry, widgetFor }) => (
  <PsychologicalInterrestsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PsychologicalInterrestsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PsychologicalInterrestsPagePreview
