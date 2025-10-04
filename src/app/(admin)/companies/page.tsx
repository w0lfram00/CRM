import React from "react";
import Header from "../../components/Header";
import Toolbar from "../../components/Toolbar";
import SearchInput from "../../components/SearchInput";
import AddCompanyButton from "../../components/AddCompanyButton";
import CompanyTable from "../../components/CompanyTable";
import CompanyRow from "../../components/CompanyRow";
import { Status } from "../../components/StatusLabel";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Products"
          company="Macronalds"
          status={Status.Pending}
          promotion={true}
          country="USA"
          joinedDate="03.09.2025"
        />
        <CompanyRow
          id={2}
          category="Products"
          company="Macronalds"
          status={Status.Active}
          promotion={false}
          country="USA"
          joinedDate="03.09.2025"
        />
      </CompanyTable>
    </>
  );
};

export default Page;
