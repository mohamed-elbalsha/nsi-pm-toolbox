import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Progress, Table, Page, Header, HeaderLabel, Content, ContentHeader, SupportButton, InfoCard } from '@backstage/core-components';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import useAsync from 'react-use/lib/useAsync';

const useStyles = makeStyles({
  avatar: {
    height: 32,
    width: 32,
    borderRadius: "50%"
  }
});
const DenseTable = ({ users }) => {
  const classes = useStyles();
  const columns = [
    { title: "Avatar", field: "avatar" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Nationality", field: "nationality" }
  ];
  const data = users.map((user) => {
    return {
      avatar: /* @__PURE__ */ React.createElement("img", {
        src: user.picture.medium,
        className: classes.avatar,
        alt: user.name.first
      }),
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      nationality: user.nat
    };
  });
  return /* @__PURE__ */ React.createElement(Table, {
    title: "Example User List (fetching data from randomuser.me)",
    options: { search: false, paging: false },
    columns,
    data
  });
};
const ExampleFetchComponent = () => {
  const { value, loading, error } = useAsync(async () => {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const data = await response.json();
    return data.results;
  }, []);
  if (loading) {
    return /* @__PURE__ */ React.createElement(Progress, null);
  } else if (error) {
    return /* @__PURE__ */ React.createElement(Alert, {
      severity: "error"
    }, error.message);
  }
  return /* @__PURE__ */ React.createElement(DenseTable, {
    users: value || []
  });
};

const ExampleComponent = () => /* @__PURE__ */ React.createElement(Page, {
  themeId: "tool"
}, /* @__PURE__ */ React.createElement(Header, {
  title: "Welcome to pmtool!",
  subtitle: "Optional subtitle"
}, /* @__PURE__ */ React.createElement(HeaderLabel, {
  label: "Owner",
  value: "Team X"
}), /* @__PURE__ */ React.createElement(HeaderLabel, {
  label: "Lifecycle",
  value: "Alpha"
})), /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(ContentHeader, {
  title: "Plugin title"
}, /* @__PURE__ */ React.createElement(SupportButton, null, "A description of your plugin goes here.")), /* @__PURE__ */ React.createElement(Grid, {
  container: true,
  spacing: 3,
  direction: "column"
}, /* @__PURE__ */ React.createElement(Grid, {
  item: true
}, /* @__PURE__ */ React.createElement(InfoCard, {
  title: "Information card"
}, /* @__PURE__ */ React.createElement(Typography, {
  variant: "body1"
}, "All content should be wrapped in a card like this."))), /* @__PURE__ */ React.createElement(Grid, {
  item: true
}, /* @__PURE__ */ React.createElement(ExampleFetchComponent, null)))));

export { ExampleComponent };
//# sourceMappingURL=index-ba5b7330.esm.js.map
