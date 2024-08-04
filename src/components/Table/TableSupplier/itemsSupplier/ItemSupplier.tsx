import React from "react";
import { format } from "date-fns";

import { Icon } from "components/Icons/Icons";

import { ItemSupplierStyle as Styled } from "./itemSupplier.style";

interface IItemSupplierProps {
  userRole: TRoles;
  categoryName: string;
  supaccID: string;
  createdDate: string;
  categoryCreator: string;
  dateFormat: string;
  onDeleteIconHandler: (itemID: string) => Promise<void>;
  onEditIconHandler: (itemID: string) => Promise<void>;
}

export const ItemSupplier: React.FC<IItemSupplierProps> = (props) => {
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
    <Styled.Item>
      <Styled.Column width="150">
        CU201
      </Styled.Column>
      <Styled.Column width="150">
        <Styled.NameWrapper>
          {categoryName}
        </Styled.NameWrapper>
      </Styled.Column>
      <Styled.Column width="150">
        <Styled.NameWrapper>
          {'----'}
        </Styled.NameWrapper>
      </Styled.Column>
      <Styled.Column width="150">
        <Styled.NameWrapper>
          {'----'}
        </Styled.NameWrapper>
      </Styled.Column>
      <Styled.Column width="150">
        <Styled.NameWrapper>
          {'0'}
        </Styled.NameWrapper>
      </Styled.Column>
      <Styled.Column>
        {format(new Date(createdDate), dateFormat)}
      </Styled.Column>
      <Styled.Column width="200">
        {categoryCreator}
      </Styled.Column>
      <Styled.Action>
        <Styled.ActionButton
          isDisabled={isActionDisabled}
          onClick={() => onEditIconHandler(supaccID)}
        >
          <Icon type="edit" />
        </Styled.ActionButton>
        <Styled.ActionButton
          isDisabled={isActionDisabled}
          onClick={() => onDeleteIconHandler(supaccID)}
        >
          <Icon type="remove" />
        </Styled.ActionButton>
      </Styled.Action>
    </Styled.Item>
  );
};
