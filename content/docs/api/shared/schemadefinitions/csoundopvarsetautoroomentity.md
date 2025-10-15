---
title: CSoundOpvarSetAutoRoomEntity
---

```csharp
public interface CSoundOpvarSetAutoRoomEntity : CSoundOpvarSetPointEntity, CSoundOpvarSetPointBase, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CSoundOpvarSetPointBase>, ISchemaClass<CSoundOpvarSetPointEntity>, ISchemaClass<CSoundOpvarSetAutoRoomEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DoorwayPairs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetAutoRoomEntity.cs#L19)

```csharp
ref CUtlVector<AutoRoomDoorwayPairs_t> DoorwayPairs { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[AutoRoomDoorwayPairs_t](/docs/api/shared/schemadefinitions/autoroomdoorwaypairs_t)>

### HeightTolerance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetAutoRoomEntity.cs#L23)

```csharp
ref float HeightTolerance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Size

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetAutoRoomEntity.cs#L21)

```csharp
ref float Size { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SizeSqr

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetAutoRoomEntity.cs#L25)

```csharp
ref float SizeSqr { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TraceResults

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetAutoRoomEntity.cs#L17)

```csharp
ref CUtlVector<SoundOpvarTraceResult_t> TraceResults { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[SoundOpvarTraceResult_t](/docs/api/shared/schemadefinitions/soundopvartraceresult_t)>

