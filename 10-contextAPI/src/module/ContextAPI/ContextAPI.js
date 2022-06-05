import React, { Component } from "react";

const translationData = {
  de: {
    greet: "Guten Tag!",
    lead: "Heute lernen wir, wie ContextAPI."
  },
  jp: {
    greet: "こんにちは",
    lead: "今日はContextAPIについて学びます。"
  },
  en: {
    greet: "Hello!",
    lead: "Today we will learn about ContextAPI."
  }
};

const LanguageContext = React.createContext();

class Localized extends Component {
  changeLanguage = (newLanguage) => {
    this.setState(() => ({
      translations: translationData[newLanguage],
      language: newLanguage
    }));
  };

  state = {
    languages: Object.keys(translationData),
    defaultLanguage: "en",
    translations: translationData["en"],
    changeLanguage: this.changeLanguage
  };

  render() {
    return (
      <LanguageContext.Provider value={this.state}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

const LanguageSelector = () => (
  <LanguageContext.Consumer>
      {(contextValue) => (
          <>
              Choose a language:
              <select
                onChange={(event) => {
                    contextValue.changeLanguage(event.target.value)
                }}
                defaultValue={contextValue.defaultLanguage}
              >
                  {contextValue.languages.map(language => (
                      <option key={language} value={language}>
                          {language}
                      </option>
                  ))}
              </select>
          </>
      )}
  </LanguageContext.Consumer>
);

const Content = () => (
  <LanguageContext.Consumer>
      {(contextValue) => (
          <>
              <h3>{contextValue.translations.greet}</h3>
              <p>{contextValue.translations.lead}</p>
          </>
      )}
  </LanguageContext.Consumer>
);

export default class ContextAPI extends Component {
  render() {
    return (
      <>
        <h1>ContextAPI</h1>
        <Localized>
          <LanguageSelector />
          <Content />
        </Localized>
      </>
    );
  }
}
