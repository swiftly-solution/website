---
title: CSoundOpvarSetAutoRoomEntity
---

# Interface CSoundOpvarSetAutoRoomEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetAutoRoomEntity.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSoundOpvarSetAutoRoomEntity : CSoundOpvarSetPointEntity, CSoundOpvarSetPointBase, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CSoundOpvarSetPointBase>, ISchemaClass<CSoundOpvarSetPointEntity>, ISchemaClass<CSoundOpvarSetAutoRoomEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CSoundOpvarSetPointEntity](/docs/api/schemadefinitions/csoundopvarsetpointentity)
- [CSoundOpvarSetPointBase](/docs/api/schemadefinitions/csoundopvarsetpointbase)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSoundOpvarSetPointBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSoundOpvarSetPointEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSoundOpvarSetAutoRoomEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DoorwayPairs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetAutoRoomEntity.cs#L20)

```csharp
ref CUtlVector<AutoRoomDoorwayPairs_t> DoorwayPairs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[AutoRoomDoorwayPairs_t](/docs/api/schemadefinitions/autoroomdoorwaypairs_t)>

### HeightTolerance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetAutoRoomEntity.cs#L24)

```csharp
ref float HeightTolerance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Size

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetAutoRoomEntity.cs#L22)

```csharp
ref float Size { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SizeSqr

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetAutoRoomEntity.cs#L26)

```csharp
ref float SizeSqr { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TraceResults

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetAutoRoomEntity.cs#L18)

```csharp
ref CUtlVector<SoundOpvarTraceResult_t> TraceResults { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SoundOpvarTraceResult_t](/docs/api/schemadefinitions/soundopvartraceresult_t)>

