/*
 * @flow
 */

import type { ExtendedModule } from '../../types/Stats';
import type { State } from '../../reducer';

import * as React from 'react';
import ModuleTableContainer from './ModuleTableContainer';
import { connect } from 'react-redux';

export type Props = {
  moduleData: ?{
    included: Array<ExtendedModule>,
    removed: Array<ExtendedModule>,
  },
  extendedModules: Array<ExtendedModule>,
};

function ModuleDataContainer(props: Props) {
  return (
    props.moduleData
      ? <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              {props.moduleData.removed.length === 0
                ? 'All'
                : props.moduleData.included.length} Modules Included
            </div>
            <ModuleTableContainer
              extendedModules={props.extendedModules}
            />
          </div>
        </div>
      </div>
      : null
  );
}

const mapStateToProps = (state: State): Props => {
  if (state.calculatedFullModuleData) {
    return {
      moduleData: state.calculatedFullModuleData.moduleData,
      extendedModules: state.calculatedFullModuleData.extendedModules,
    };
  } else {
    return {
      moduleData: null,
      extendedModules: [],
    };
  }
};

export default connect(
  mapStateToProps,
)(ModuleDataContainer);
