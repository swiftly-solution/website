---
title: CLogicAutosave
---

```csharp
public interface CLogicAutosave : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CLogicAutosave>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**ForceNewLevelUnit** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicAutosave.cs#L16)

```csharp
ref bool ForceNewLevelUnit { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**MinHitPoints** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicAutosave.cs#L18)

```csharp
ref int MinHitPoints { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**MinHitPointsToCommit** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicAutosave.cs#L20)

```csharp
ref int MinHitPointsToCommit { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

