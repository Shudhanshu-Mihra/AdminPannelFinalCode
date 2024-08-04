import React from "react";
import { format } from "date-fns";

import { Icon } from "components/Icons/Icons";

import { TableMasterItemStyles } from "./itemSupplierAccount.style.";

interface IitemSupplierAccountProps {
  userRole: TRoles;
  categoryName: string;
  supaccID: string;
  createdDate: string;
  categoryCreator: string;
  dateFormat: string;
  onDeleteIconHandler: (itemID: string) => Promise<void>;
  onEditIconHandler: (itemID: string) => Promise<void>;
}

export const ItemSupplierAccount: React.FC<IitemSupplierAccountProps> = (props) => {
  const {
    categoryCreator,
    categoryName,
    supaccID,
    createdDate,
    dateFormat,
    userRole,
    onDeleteIconHandler,
    onEditIconHandler,
  } = props;

  const isActionDisabled = userRole === "user";
  return (
    <TableMasterItemStyles.Item>
      <TableMasterItemStyles.Column width="150">
        CU201
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column width="200">
        <TableMasterItemStyles.NameWrapper>
          {categoryName}
        </TableMasterItemStyles.NameWrapper>
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column width="200">
        <TableMasterItemStyles.NameWrapper>
          {'----'}
        </TableMasterItemStyles.NameWrapper>
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column width="200">
        <TableMasterItemStyles.NameWrapper>
          {'0'}
        </TableMasterItemStyles.NameWrapper>
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column>
        {format(new Date(createdDate), dateFormat)}
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Column width="200">
        {categoryCreator}
      </TableMasterItemStyles.Column>
      <TableMasterItemStyles.Action>
        <TableMasterItemStyles.ActionButton
          isDisabled={isActionDisabled}
          onClick={() => onEditIconHandler(supaccID)}
        >
          <Icon type="edit" />
        </TableMasterItemStyles.ActionButton>
        <TableMasterItemStyles.ActionButton
          isDisabled={isActionDisabled}
          onClick={() => onDeleteIconHandler(supaccID)}
        >
          <Icon type="remove" />
        </TableMasterItemStyles.ActionButton>
      </TableMasterItemStyles.Action>
    </TableMasterItemStyles.Item>
  );
};
