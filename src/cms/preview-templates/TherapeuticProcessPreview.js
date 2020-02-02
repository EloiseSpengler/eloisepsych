import React from 'react'
import PropTypes from 'prop-types'
import { TherapeuticProcessPageTemplate } from '../../templates/therapeuticprocess-page'

const TherapeuticProcessPagePreview = ({ entry, widgetFor }) => (
  <TherapeuticProcessPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

TherapeuticProcessPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TherapeuticProcessPagePreview
