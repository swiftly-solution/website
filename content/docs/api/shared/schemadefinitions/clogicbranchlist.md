---
title: CLogicBranchList
---

```csharp
public interface CLogicBranchList : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CLogicBranchList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**LastState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranchList.cs#L20)

```csharp
ref CLogicBranchList__LogicBranchListenerLastState_t LastState { get; }
```

#### Property Value

- [CLogicBranchList__LogicBranchListenerLastState_t](/docs/api/shared/schemadefinitions/clogicbranchlist__logicbranchlistenerlaststate_t)

**LogicBranchList** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranchList.cs#L18)

```csharp
ref CUtlVector<CHandle<CBaseEntity>> LogicBranchList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

**LogicBranchNames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranchList.cs#L16)

```csharp
ISchemaFixedArray<CUtlSymbolLarge> LogicBranchNames { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)>

**OnAllFalse** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranchList.cs#L24)

```csharp
CEntityIOOutput OnAllFalse { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnAllTrue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranchList.cs#L22)

```csharp
CEntityIOOutput OnAllTrue { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnMixed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranchList.cs#L26)

```csharp
CEntityIOOutput OnMixed { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

