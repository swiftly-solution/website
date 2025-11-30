---
title: CPAssignment_t
---

# Interface CPAssignment_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPAssignment_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPAssignment_t : ISchemaClass<CPAssignment_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CPAssignment_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CPNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPAssignment_t.cs#L18)

```csharp
ref int CPNumber { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OrientationMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPAssignment_t.cs#L22)

```csharp
ref ParticleOrientationSetMode_t OrientationMode { get; }
```

#### Property Value

- [ParticleOrientationSetMode_t](/docs/api/schemadefinitions/particleorientationsetmode_t)

### Pos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPAssignment_t.cs#L20)

```csharp
CPerParticleVecInput Pos { get; }
```

#### Property Value

- [CPerParticleVecInput](/docs/api/schemadefinitions/cperparticlevecinput)

