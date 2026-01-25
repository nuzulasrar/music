{
  /* bG row1 */
}
<tr>
  <td rowSpan={15} className="font-bold text-center text-[12px]">
    DECK SLAB (Primary)
  </td>
  <td rowSpan={7} className="font-bold text-center text-[12px]">
    Steel
  </td>
  <td className="font-semibold text-[12px]">Corrosion of Steel</td>
  <td className="font-semibold text-center text-[12px]">1</td>
  <td className="justify-center items-center">
    {c2.r1d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td className="justify-center items-center">
    {!c2.r1d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* severity */}
  <td
    onClick={() => {
      if (editCheck && c2.r1s == 1) {
        setC2({ ...c2, r1s: 0, r1d: false });
      } else if (editCheck && c2.r1s != 1) {
        setC2({ ...c2, r1s: 1, r1d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r1s == 1 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r1s == 2) {
        setC2({ ...c2, r1s: 0, r1d: false });
      } else if (editCheck && c2.r1s != 2) {
        setC2({ ...c2, r1s: 2, r1d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r1s == 2 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r1s == 3) {
        setC2({ ...c2, r1s: 0, r1d: false });
      } else if (editCheck && c2.r1s != 3) {
        setC2({ ...c2, r1s: 3, r1d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r1s == 3 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r1s == 4) {
        setC2({ ...c2, r1s: 0, r1d: false });
      } else if (editCheck && c2.r1s != 4) {
        setC2({ ...c2, r1s: 4, r1d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r1s == 4 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* percentage */}
  <td className="text-center text-[12px]">
    {data.beamGirder_steel_corrosionOfSteel_pctgAff1}
  </td>
  <td className="text-center text-[10px]">
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "p",
            compNo: "2",
            rowNo: "1",
            mat: "Corrosion of Steel",
            value: c2.r1p,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Edit
      </button>
    ) : (
      c2.r1p
    )}
  </td>
  {/* remarks */}
  <td className="text-center text-[10px]">
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "r",
            compNo: "2",
            rowNo: "1",
            mat: "Corrosion of Steel",
            value: c2.r1r,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Edit
      </button>
    ) : (
      c2.r1r
    )}
  </td>
  {/* rod */}
  <td className="text-center text-[10px]">
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rod",
            compNo: "2",
            rowNo: "1",
            mat: "Corrosion of Steel",
            value: c2.r1rod,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Edit
      </button>
    ) : (
      c2.r1rod
    )}
  </td>
  {/* rom */}
  <td rowSpan={7} className="text-center text-[10px]">
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rom",
            compNo: "2",
            rowNo: "1",
            mat: "Steel",
            value: c2.rom1,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Edit
      </button>
    ) : (
      c2.rom1
    )}
  </td>
</tr>;
{
  /* bG row2 */
}
<tr>
  <td className="font-semibold text-[12px]">Fracture at Steel</td>
  <td className="font-semibold text-center text-[12px]">2</td>
  <td className="justify-center items-center">
    {c2.r2d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td className="justify-center items-center">
    {!c2.r2d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* severity */}
  <td
    onClick={() => {
      if (editCheck && c2.r2s == 1) {
        setC2({ ...c2, r2s: 0, r2d: false });
      } else if (editCheck && c2.r2s != 1) {
        setC2({ ...c2, r2s: 1, r2d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r2s == 1 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r2s == 2) {
        setC2({ ...c2, r2s: 0, r2d: false });
      } else if (editCheck && c2.r2s != 2) {
        setC2({ ...c2, r2s: 2, r2d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r2s == 2 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r2s == 3) {
        setC2({ ...c2, r2s: 0, r2d: false });
      } else if (editCheck && c2.r2s != 3) {
        setC2({ ...c2, r2s: 3, r2d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r2s == 3 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r2s == 4) {
        setC2({ ...c2, r2s: 0, r2d: false });
      } else if (editCheck && c2.r2s != 4) {
        setC2({ ...c2, r2s: 4, r2d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r2s == 4 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* percentage */}{" "}
  <td colSpan={2} className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "p",
            compNo: "2",
            rowNo: "2",
            mat: "Fracture at Steel",
            value: c2.r2p,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r2p
    )}{" "}
  </td>{" "}
  {/* remarks */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "r",
            compNo: "2",
            rowNo: "2",
            mat: "Fracture at Steel",
            value: c2.r2r,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r2r
    )}{" "}
  </td>{" "}
  {/* rod */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rod",
            compNo: "2",
            rowNo: "2",
            mat: "Fracture at Steel",
            value: c2.r2rod,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r2rod
    )}{" "}
  </td>
</tr>;
{
  /* bG row3 */
}
<tr>
  <td className="font-semibold text-[12px]">Loose Connections</td>
  <td className="font-semibold text-center text-[12px]">3</td>
  <td className="justify-center items-center">
    {c2.r3d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td className="justify-center items-center">
    {!c2.r3d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* severity */}
  <td
    onClick={() => {
      if (editCheck && c2.r3s == 1) {
        setC2({ ...c2, r3s: 0, r3d: false });
      } else if (editCheck && c2.r3s != 1) {
        setC2({ ...c2, r3s: 1, r3d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r3s == 1 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r3s == 2) {
        setC2({ ...c2, r3s: 0, r3d: false });
      } else if (editCheck && c2.r3s != 2) {
        setC2({ ...c2, r3s: 2, r3d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r3s == 2 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r3s == 3) {
        setC2({ ...c2, r3s: 0, r3d: false });
      } else if (editCheck && c2.r3s != 3) {
        setC2({ ...c2, r3s: 3, r3d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r3s == 3 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r3s == 4) {
        setC2({ ...c2, r3s: 0, r3d: false });
      } else if (editCheck && c2.r3s != 4) {
        setC2({ ...c2, r3s: 4, r3d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r3s == 4 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* percentage */}{" "}
  <td className="text-center text-[12px]">
    {" "}
    {data.beamGirder_steel_looseConnections_pctgAff1}{" "}
  </td>{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "p",
            compNo: "2",
            rowNo: "3",
            mat: "Loose Connections",
            value: c2.r3p,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r3p
    )}{" "}
  </td>{" "}
  {/* remarks */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "r",
            compNo: "2",
            rowNo: "3",
            mat: "Loose Connections",
            value: c2.r3r,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r3r
    )}{" "}
  </td>{" "}
  {/* rod */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rod",
            compNo: "2",
            rowNo: "3",
            mat: "Loose Connections",
            value: c2.r3rod,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r3rod
    )}{" "}
  </td>
</tr>;
{
  /* bG row4 */
}
<tr>
  <td className="font-semibold text-[12px]">Permanent Deformations</td>
  <td className="font-semibold text-center text-[12px]">4</td>
  <td className="justify-center items-center">
    {c2.r4d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td className="justify-center items-center">
    {!c2.r4d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* severity */}
  <td
    onClick={() => {
      if (editCheck && c2.r4s == 1) {
        setC2({ ...c2, r4s: 0, r4d: false });
      } else if (editCheck && c2.r4s != 1) {
        setC2({ ...c2, r4s: 1, r4d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r4s == 1 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r4s == 2) {
        setC2({ ...c2, r4s: 0, r4d: false });
      } else if (editCheck && c2.r4s != 2) {
        setC2({ ...c2, r4s: 2, r4d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r4s == 2 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r4s == 3) {
        setC2({ ...c2, r4s: 0, r4d: false });
      } else if (editCheck && c2.r4s != 3) {
        setC2({ ...c2, r4s: 3, r4d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r4s == 3 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r4s == 4) {
        setC2({ ...c2, r4s: 0, r4d: false });
      } else if (editCheck && c2.r4s != 4) {
        setC2({ ...c2, r4s: 4, r4d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r4s == 4 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* percentage */}{" "}
  <td colSpan={2} className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "p",
            compNo: "2",
            rowNo: "4",
            mat: "Permanent Deformations",
            value: c2.r4p,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r4p
    )}{" "}
  </td>{" "}
  {/* remarks */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "r",
            compNo: "2",
            rowNo: "4",
            mat: "Permanent Deformations",
            value: c2.r4r,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r4r
    )}{" "}
  </td>{" "}
  {/* rod */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rod",
            compNo: "2",
            rowNo: "4",
            mat: "Permanent Deformations",
            value: c2.r4rod,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r4rod
    )}{" "}
  </td>
</tr>;
{
  /* bG row5 */
}
<tr>
  <td className="font-semibold text-[12px]">Water Leak</td>
  <td className="font-semibold text-center text-[12px]">14</td>
  <td className="justify-center items-center">
    {c2.r5d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td className="justify-center items-center">
    {!c2.r5d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* severity */}
  <td
    onClick={() => {
      if (editCheck && c2.r5s == 1) {
        setC2({ ...c2, r5s: 0, r5d: false });
      } else if (editCheck && c2.r5s != 1) {
        setC2({ ...c2, r5s: 1, r5d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r5s == 1 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r5s == 2) {
        setC2({ ...c2, r5s: 0, r5d: false });
      } else if (editCheck && c2.r5s != 2) {
        setC2({ ...c2, r5s: 2, r5d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r5s == 2 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r5s == 3) {
        setC2({ ...c2, r5s: 0, r5d: false });
      } else if (editCheck && c2.r5s != 3) {
        setC2({ ...c2, r5s: 3, r5d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r5s == 3 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r5s == 4) {
        setC2({ ...c2, r5s: 0, r5d: false });
      } else if (editCheck && c2.r5s != 4) {
        setC2({ ...c2, r5s: 4, r5d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r5s == 4 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* percentage */}{" "}
  <td className="text-center text-[12px]">
    {" "}
    {data.beamGirder_steel_paintDeterioration_pctgAff1}{" "}
  </td>{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "p",
            compNo: "2",
            rowNo: "5",
            mat: "Water Leak",
            value: c2.r5p,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r5p
    )}{" "}
  </td>{" "}
  {/* remarks */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "r",
            compNo: "2",
            rowNo: "5",
            mat: "Water Leak",
            value: c2.r5r,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r5r
    )}{" "}
  </td>{" "}
  {/* rod */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rod",
            compNo: "2",
            rowNo: "5",
            mat: "Water Leak",
            value: c2.r5rod,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r5rod
    )}{" "}
  </td>
</tr>;
{
  /* bG row6 */
}
<tr>
  <td className="font-semibold text-[12px]">Abnormal Movement</td>
  <td className="font-semibold text-center text-[12px]">16</td>
  <td className="justify-center items-center">
    {c2.r6d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td className="justify-center items-center">
    {!c2.r6d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* severity */}
  <td
    onClick={() => {
      if (editCheck && c2.r6s == 1) {
        setC2({ ...c2, r6s: 0, r6d: false });
      } else if (editCheck && c2.r6s != 1) {
        setC2({ ...c2, r6s: 1, r6d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r6s == 1 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r6s == 2) {
        setC2({ ...c2, r6s: 0, r6d: false });
      } else if (editCheck && c2.r6s != 2) {
        setC2({ ...c2, r6s: 2, r6d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r6s == 2 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r6s == 3) {
        setC2({ ...c2, r6s: 0, r6d: false });
      } else if (editCheck && c2.r6s != 3) {
        setC2({ ...c2, r6s: 3, r6d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r6s == 3 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r6s == 4) {
        setC2({ ...c2, r6s: 0, r6d: false });
      } else if (editCheck && c2.r6s != 4) {
        setC2({ ...c2, r6s: 4, r6d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r6s == 4 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* percentage */}{" "}
  <td colSpan={2} className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "p",
            compNo: "2",
            rowNo: "6",
            mat: "Abnormal Movement",
            value: c2.r6p,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r6p
    )}{" "}
  </td>{" "}
  {/* remarks */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "r",
            compNo: "2",
            rowNo: "6",
            mat: "Abnormal Movement",
            value: c2.r6r,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r6r
    )}{" "}
  </td>{" "}
  {/* rod */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rod",
            compNo: "2",
            rowNo: "6",
            mat: "Abnormal Movement",
            value: c2.r6rod,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r6rod
    )}{" "}
  </td>
</tr>;
{
  /* bG row7 */
}
<tr>
  <td className="font-semibold text-[12px]">Abnormal Noise</td>
  <td className="font-semibold text-center text-[12px]">31</td>
  <td className="justify-center items-center">
    {c2.r7d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td className="justify-center items-center">
    {!c2.r7d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* severity */}
  <td
    onClick={() => {
      if (editCheck && c2.r7s == 1) {
        setC2({ ...c2, r7s: 0, r7d: false });
      } else if (editCheck && c2.r7s != 1) {
        setC2({ ...c2, r7s: 1, r7d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r7s == 1 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r7s == 2) {
        setC2({ ...c2, r7s: 0, r7d: false });
      } else if (editCheck && c2.r7s != 2) {
        setC2({ ...c2, r7s: 2, r7d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r7s == 2 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r7s == 3) {
        setC2({ ...c2, r7s: 0, r7d: false });
      } else if (editCheck && c2.r7s != 3) {
        setC2({ ...c2, r7s: 3, r7d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r7s == 3 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r7s == 4) {
        setC2({ ...c2, r7s: 0, r7d: false });
      } else if (editCheck && c2.r7s != 4) {
        setC2({ ...c2, r7s: 4, r7d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r7s == 4 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* percentage */}{" "}
  <td colSpan={2} className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "p",
            compNo: "2",
            rowNo: "7",
            mat: "Abnormal Noise",
            value: c2.r7p,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r7p
    )}{" "}
  </td>{" "}
  {/* remarks */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "r",
            compNo: "2",
            rowNo: "7",
            mat: "Abnormal Noise",
            value: c2.r7r,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r7r
    )}{" "}
  </td>{" "}
  {/* rod */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rod",
            compNo: "2",
            rowNo: "7",
            mat: "Abnormal Noise",
            value: c2.r7rod,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r7rod
    )}{" "}
  </td>
</tr>;
{
  /* bG material 2 */
}
<tr>
  <td rowSpan={8} className="font-bold text-[12px]">
    P. Concrete R. Concrete
  </td>
</tr>;
{
  /* bG row8 */
}
<tr>
  <td className="font-semibold text-[12px]">Surface Defect</td>
  <td className="font-semibold text-center text-[12px]">11</td>
  <td className="justify-center items-center">
    {c2.r8d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td className="justify-center items-center">
    {!c2.r8d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* severity */}
  <td
    onClick={() => {
      if (editCheck && c2.r8s == 1) {
        setC2({ ...c2, r8s: 0, r8d: false });
      } else if (editCheck && c2.r8s != 1) {
        setC2({ ...c2, r8s: 1, r8d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r8s == 1 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r8s == 2) {
        setC2({ ...c2, r8s: 0, r8d: false });
      } else if (editCheck && c2.r8s != 2) {
        setC2({ ...c2, r8s: 2, r8d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r8s == 2 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r8s == 3) {
        setC2({ ...c2, r8s: 0, r8d: false });
      } else if (editCheck && c2.r8s != 3) {
        setC2({ ...c2, r8s: 3, r8d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r8s == 3 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r8s == 4) {
        setC2({ ...c2, r8s: 0, r8d: false });
      } else if (editCheck && c2.r8s != 4) {
        setC2({ ...c2, r8s: 4, r8d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r8s == 4 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* percentage */}{" "}
  <td className="text-center text-[12px]">
    {" "}
    {data.beamGirder_pAndRConcrete_surfaceDefect_pctgAff1}{" "}
  </td>{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "p",
            compNo: "2",
            rowNo: "8",
            mat: "Surface Defect",
            value: c2.r8p,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r8p
    )}{" "}
  </td>{" "}
  {/* remarks */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "r",
            compNo: "2",
            rowNo: "8",
            mat: "Surface Defect",
            value: c2.r8r,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r8r
    )}{" "}
  </td>{" "}
  {/* rod */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rod",
            compNo: "2",
            rowNo: "8",
            mat: "Surface Defect",
            value: c2.r8rod,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r8rod
    )}{" "}
  </td>
  {/* rom */}
  <td rowSpan={7} className="text-center text-[10px]">
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rom",
            compNo: "2",
            rowNo: "2",
            mat: "P. Concrete and R. Concrete",
            value: c2.rom2,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Edit
      </button>
    ) : (
      c2.rom2
    )}
  </td>
</tr>;
{
  /* bG row9 */
}
<tr>
  <td className="font-semibold text-[12px]">Cracks at Concrete</td>
  <td className="font-semibold text-center text-[12px]">6</td>
  <td className="justify-center items-center">
    {c2.r9d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td className="justify-center items-center">
    {!c2.r9d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* severity */}
  <td
    onClick={() => {
      if (editCheck && c2.r9s == 1) {
        setC2({ ...c2, r9s: 0, r9d: false });
      } else if (editCheck && c2.r9s != 1) {
        setC2({ ...c2, r9s: 1, r9d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r9s == 1 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r9s == 2) {
        setC2({ ...c2, r9s: 0, r9d: false });
      } else if (editCheck && c2.r9s != 2) {
        setC2({ ...c2, r9s: 2, r9d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r9s == 2 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r9s == 3) {
        setC2({ ...c2, r9s: 0, r9d: false });
      } else if (editCheck && c2.r9s != 3) {
        setC2({ ...c2, r9s: 3, r9d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r9s == 3 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r9s == 4) {
        setC2({ ...c2, r9s: 0, r9d: false });
      } else if (editCheck && c2.r9s != 4) {
        setC2({ ...c2, r9s: 4, r9d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r9s == 4 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* percentage */}{" "}
  <td colSpan={2} className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "p",
            compNo: "2",
            rowNo: "9",
            mat: "Cracks at Concrete",
            value: c2.r9p,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r9p
    )}{" "}
  </td>{" "}
  {/* remarks */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "r",
            compNo: "2",
            rowNo: "9",
            mat: "Cracks at Concrete",
            value: c2.r9r,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r9r
    )}{" "}
  </td>{" "}
  {/* rod */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rod",
            compNo: "2",
            rowNo: "9",
            mat: "Cracks at Concrete",
            value: c2.r9rod,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r9rod
    )}{" "}
  </td>
</tr>;
{
  /* bG row10 */
}
<tr>
  <td className="font-semibold text-[12px]">Delamination</td>
  <td className="font-semibold text-center text-[12px]">12</td>
  <td className="justify-center items-center">
    {c2.r10d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td className="justify-center items-center">
    {!c2.r10d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* severity */}
  <td
    onClick={() => {
      if (editCheck && c2.r10s == 1) {
        setC2({ ...c2, r10s: 0, r10d: false });
      } else if (editCheck && c2.r10s != 1) {
        setC2({ ...c2, r10s: 1, r10d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r10s == 1 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r10s == 2) {
        setC2({ ...c2, r10s: 0, r10d: false });
      } else if (editCheck && c2.r10s != 2) {
        setC2({ ...c2, r10s: 2, r10d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r10s == 2 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r10s == 3) {
        setC2({ ...c2, r10s: 0, r10d: false });
      } else if (editCheck && c2.r10s != 3) {
        setC2({ ...c2, r10s: 3, r10d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r10s == 3 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r10s == 4) {
        setC2({ ...c2, r10s: 0, r10d: false });
      } else if (editCheck && c2.r10s != 4) {
        setC2({ ...c2, r10s: 4, r10d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r10s == 4 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* percentage */}{" "}
  <td className="text-center text-[12px]">
    {" "}
    {data.beamGirder_pAndRConcrete_delamination_pctgAff1}{" "}
  </td>{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "p",
            compNo: "2",
            rowNo: "10",
            mat: "Delamination",
            value: c2.r10p,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r10p
    )}{" "}
  </td>{" "}
  {/* remarks */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "r",
            compNo: "2",
            rowNo: "10",
            mat: "Delamination",
            value: c2.r10r,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r10r
    )}{" "}
  </td>{" "}
  {/* rod */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rod",
            compNo: "2",
            rowNo: "10",
            mat: "Delamination",
            value: c2.r10rod,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r10rod
    )}{" "}
  </td>
</tr>;
{
  /* bG row11 */
}
<tr>
  <td className="font-semibold text-[12px]">Spalling</td>
  <td className="font-semibold text-center text-[12px]">7</td>
  <td className="justify-center items-center">
    {c2.r11d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td className="justify-center items-center">
    {!c2.r11d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* severity */}
  <td
    onClick={() => {
      if (editCheck && c2.r11s == 1) {
        setC2({ ...c2, r11s: 0, r11d: false });
      } else if (editCheck && c2.r11s != 1) {
        setC2({ ...c2, r11s: 1, r11d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r11s == 1 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r11s == 2) {
        setC2({ ...c2, r11s: 0, r11d: false });
      } else if (editCheck && c2.r11s != 2) {
        setC2({ ...c2, r11s: 2, r11d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r11s == 2 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r11s == 3) {
        setC2({ ...c2, r11s: 0, r11d: false });
      } else if (editCheck && c2.r11s != 3) {
        setC2({ ...c2, r11s: 3, r11d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r11s == 3 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r11s == 4) {
        setC2({ ...c2, r11s: 0, r11d: false });
      } else if (editCheck && c2.r11s != 4) {
        setC2({ ...c2, r11s: 4, r11d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r11s == 4 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* percentage */}{" "}
  <td className="text-center text-[12px]">
    {" "}
    {data.beamGirder_pAndRConcrete_spalling_pctgAff1}{" "}
  </td>{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "p",
            compNo: "2",
            rowNo: "11",
            mat: "Spalling",
            value: c2.r11p,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r11p
    )}{" "}
  </td>{" "}
  {/* remarks */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "r",
            compNo: "2",
            rowNo: "11",
            mat: "Spalling",
            value: c2.r11r,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r11r
    )}{" "}
  </td>{" "}
  {/* rod */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rod",
            compNo: "2",
            rowNo: "11",
            mat: "Spalling",
            value: c2.r11rod,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r11rod
    )}{" "}
  </td>
</tr>;
{
  /* bG row12 */
}
<tr>
  <td className="font-semibold text-[12px]">Corrosion of Reinforcement</td>
  <td className="font-semibold text-center text-[12px]">8</td>
  <td className="justify-center items-center">
    {c2.r12d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td className="justify-center items-center">
    {!c2.r12d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* severity */}
  <td
    onClick={() => {
      if (editCheck && c2.r12s == 1) {
        setC2({ ...c2, r12s: 0, r12d: false });
      } else if (editCheck && c2.r12s != 1) {
        setC2({ ...c2, r12s: 1, r12d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r12s == 1 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r12s == 2) {
        setC2({ ...c2, r12s: 0, r12d: false });
      } else if (editCheck && c2.r12s != 2) {
        setC2({ ...c2, r12s: 2, r12d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r12s == 2 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r12s == 3) {
        setC2({ ...c2, r12s: 0, r12d: false });
      } else if (editCheck && c2.r12s != 3) {
        setC2({ ...c2, r12s: 3, r12d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r12s == 3 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r12s == 4) {
        setC2({ ...c2, r12s: 0, r12d: false });
      } else if (editCheck && c2.r12s != 4) {
        setC2({ ...c2, r12s: 4, r12d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r12s == 4 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* percentage */}{" "}
  <td className="text-center text-[12px]">
    {" "}
    {data.beamGirder_pAndRConcrete_corrossionOfReinforcement_pctgAff1}{" "}
  </td>{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "p",
            compNo: "2",
            rowNo: "12",
            mat: "Corrosion of Reinforcement",
            value: c2.r12p,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r12p
    )}{" "}
  </td>{" "}
  {/* remarks */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "r",
            compNo: "2",
            rowNo: "12",
            mat: "Corrosion of Reinforcement",
            value: c2.r12r,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r12r
    )}{" "}
  </td>{" "}
  {/* rod */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rod",
            compNo: "2",
            rowNo: "12",
            mat: "Corrosion of Reinforcement",
            value: c2.r12rod,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r12rod
    )}{" "}
  </td>
</tr>;
{
  /* bG row13 */
}
<tr>
  <td className="font-semibold text-[12px]">Abnormal Vibration/Deflection</td>
  <td className="font-semibold text-center text-[12px]">13</td>
  <td className="justify-center items-center">
    {c2.r13d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td className="justify-center items-center">
    {!c2.r13d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* severity */}
  <td
    onClick={() => {
      if (editCheck && c2.r13s == 1) {
        setC2({ ...c2, r13s: 0, r13d: false });
      } else if (editCheck && c2.r13s != 1) {
        setC2({ ...c2, r13s: 1, r13d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r13s == 1 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r13s == 2) {
        setC2({ ...c2, r13s: 0, r13d: false });
      } else if (editCheck && c2.r13s != 2) {
        setC2({ ...c2, r13s: 2, r13d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r13s == 2 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r13s == 3) {
        setC2({ ...c2, r13s: 0, r13d: false });
      } else if (editCheck && c2.r13s != 3) {
        setC2({ ...c2, r13s: 3, r13d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r13s == 3 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r13s == 4) {
        setC2({ ...c2, r13s: 0, r13d: false });
      } else if (editCheck && c2.r13s != 4) {
        setC2({ ...c2, r13s: 4, r13d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r13s == 4 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* percentage */}{" "}
  <td colSpan={2} className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "p",
            compNo: "2",
            rowNo: "13",
            mat: "Abnormal Vibration/Deflection ",
            value: c2.r13p,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r13p
    )}{" "}
  </td>{" "}
  {/* remarks */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "r",
            compNo: "2",
            rowNo: "13",
            mat: "Abnormal Vibration/Deflection ",
            value: c2.r13r,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r13r
    )}{" "}
  </td>{" "}
  {/* rod */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rod",
            compNo: "2",
            rowNo: "13",
            mat: "Abnormal Vibration/Deflection ",
            value: c2.r13rod,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r13rod
    )}{" "}
  </td>
</tr>;
{
  /* bG row14 */
}
<tr>
  <td className="font-semibold text-[12px]">Abnormal Noise</td>
  <td className="font-semibold text-center text-[12px]">16</td>
  <td className="justify-center items-center">
    {c2.r14d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td className="justify-center items-center">
    {!c2.r14d && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* severity */}
  <td
    onClick={() => {
      if (editCheck && c2.r14s == 1) {
        setC2({ ...c2, r14s: 0, r14d: false });
      } else if (editCheck && c2.r14s != 1) {
        setC2({ ...c2, r14s: 1, r14d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r14s == 1 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r14s == 2) {
        setC2({ ...c2, r14s: 0, r14d: false });
      } else if (editCheck && c2.r14s != 2) {
        setC2({ ...c2, r14s: 2, r14d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r14s == 2 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r14s == 3) {
        setC2({ ...c2, r14s: 0, r14d: false });
      } else if (editCheck && c2.r14s != 3) {
        setC2({ ...c2, r14s: 3, r14d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r14s == 3 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  <td
    onClick={() => {
      if (editCheck && c2.r14s == 4) {
        setC2({ ...c2, r14s: 0, r14d: false });
      } else if (editCheck && c2.r14s != 4) {
        setC2({ ...c2, r14s: 4, r14d: true });
      }
    }}
    className="justify-center items-center"
  >
    {c2.r14s == 4 && (
      <Image
        src="/check.png"
        alt=""
        width={10}
        height={10}
        style={{ alignSelf: "center", margin: "0 auto" }}
      />
    )}
  </td>
  {/* percentage */}
  <td colSpan={2} className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "p",
            compNo: "2",
            rowNo: "14",
            mat: "Abnormal Noise",
            value: c2.r14p,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r14p
    )}{" "}
  </td>{" "}
  {/* remarks */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "r",
            compNo: "2",
            rowNo: "14",
            mat: "Abnormal Noise",
            value: c2.r14r,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r14r
    )}{" "}
  </td>{" "}
  {/* rod */}{" "}
  <td className="text-center text-[10px]">
    {" "}
    {editCheck ? (
      <button
        onClick={() => {
          setEditorMode({
            ...editorMode,
            type: "rod",
            compNo: "2",
            rowNo: "14",
            mat: "Abnormal Noise",
            value: c2.r14rod,
          });
          setIsModalOpen(true);
        }}
        className="px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {" "}
        Edit{" "}
      </button>
    ) : (
      c2.r14rod
    )}{" "}
  </td>
</tr>;
