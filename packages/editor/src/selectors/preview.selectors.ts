// Copyright 2018 Superblocks AB
//
// This file is part of Superblocks Lab.
//
// Superblocks Lab is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation version 3 of the License.
//
// Superblocks Lab is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Superblocks Lab.  If not, see <http://www.gnu.org/licenses/>.

export const previewSelectors = {
    getDisableWeb3: (state: any) => state.preview.disableWeb3,
    getShowNoExportableContentModal: (state: any) => state.preview.showNoExportableContentModal,
    getShowCannotExportModal: (state: any) => state.preview.showCannotExportModal,
    getShowDownloadModal: (state: any) => state.preview.showDownloadModal,
    getHtmlToRender: (state: any) => state.preview.htmlToRender
};
