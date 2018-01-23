import * as assert from 'assert';
import { OCTICONS_VERSION } from '../../index';

describe('OCTICONS_VERSION', function() {
    it('represents the version of octicons pacakge which was used to build this package', function() {
        assert(/^\d+\.\d+\.\d+$/.test(OCTICONS_VERSION));
    });
});
