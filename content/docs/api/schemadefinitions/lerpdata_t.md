---
title: lerpdata_t
---

# Interface lerpdata_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/lerpdata_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface lerpdata_t : ISchemaClass<lerpdata_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<lerpdata_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Ent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/lerpdata_t.cs#L18)

```csharp
ref CHandle<CBaseEntity> Ent { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### FXIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/lerpdata_t.cs#L28)

```csharp
ParticleIndex_t FXIndex { get; }
```

#### Property Value

- [ParticleIndex_t](/docs/api/schemadefinitions/particleindex_t)

### MoveType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/lerpdata_t.cs#L20)

```csharp
ref MoveType_t MoveType { get; }
```

#### Property Value

- [MoveType_t](/docs/api/schemadefinitions/movetype_t)

### StartOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/lerpdata_t.cs#L24)

```csharp
ref Vector StartOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### StartRot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/lerpdata_t.cs#L26)

```csharp
ref Quaternion StartRot { get; }
```

#### Property Value

- [Quaternion](/docs/api/natives/quaternion)

### StartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/lerpdata_t.cs#L22)

```csharp
GameTime_t StartTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

