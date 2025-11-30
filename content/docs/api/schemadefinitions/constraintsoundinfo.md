---
title: ConstraintSoundInfo
---

# Interface ConstraintSoundInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ConstraintSoundInfo : ISchemaClass<ConstraintSoundInfo>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<ConstraintSoundInfo>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ForwardAxis

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L22)

```csharp
ref Vector ForwardAxis { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### PlayReversalSound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L32)

```csharp
ref bool PlayReversalSound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PlayTravelSound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L30)

```csharp
ref bool PlayTravelSound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReversalSounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L28)

```csharp
string ReversalSounds { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Sampler

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L18)

```csharp
VelocitySampler Sampler { get; }
```

#### Property Value

- [VelocitySampler](/docs/api/schemadefinitions/velocitysampler)

### SoundProfile

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L20)

```csharp
SimpleConstraintSoundProfile SoundProfile { get; }
```

#### Property Value

- [SimpleConstraintSoundProfile](/docs/api/schemadefinitions/simpleconstraintsoundprofile)

### TravelSoundBack

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L26)

```csharp
string TravelSoundBack { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### TravelSoundFwd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L24)

```csharp
string TravelSoundFwd { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

