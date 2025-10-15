---
title: CLogicBranchList
---

```csharp
public interface CLogicBranchList : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CLogicBranchList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### LastState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranchList.cs#L21)

```csharp
ref CLogicBranchList__LogicBranchListenerLastState_t LastState { get; }
```

#### Property Value

- [CLogicBranchList__LogicBranchListenerLastState_t](/docs/api/shared/schemadefinitions/clogicbranchlist__logicbranchlistenerlaststate_t)

### LogicBranchList

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranchList.cs#L19)

```csharp
ref CUtlVector<CHandle<CBaseEntity>> LogicBranchList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

### LogicBranchNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranchList.cs#L17)

```csharp
string LogicBranchNames { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OnAllFalse

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranchList.cs#L25)

```csharp
CEntityIOOutput OnAllFalse { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnAllTrue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranchList.cs#L23)

```csharp
CEntityIOOutput OnAllTrue { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OnMixed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranchList.cs#L27)

```csharp
CEntityIOOutput OnMixed { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

