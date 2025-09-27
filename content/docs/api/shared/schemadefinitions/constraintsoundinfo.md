---
title: ConstraintSoundInfo
---

```csharp
public interface ConstraintSoundInfo : ISchemaClass<ConstraintSoundInfo>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**ForwardAxis** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L20)

```csharp
ref Vector ForwardAxis { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**PlayReversalSound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L30)

```csharp
ref bool PlayReversalSound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**PlayTravelSound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L28)

```csharp
ref bool PlayTravelSound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ReversalSounds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L26)

```csharp
ISchemaFixedArray<CUtlSymbolLarge> ReversalSounds { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)>

**Sampler** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L16)

```csharp
VelocitySampler Sampler { get; }
```

#### Property Value

- [VelocitySampler](/docs/api/shared/schemadefinitions/velocitysampler)

**SoundProfile** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L18)

```csharp
SimpleConstraintSoundProfile SoundProfile { get; }
```

#### Property Value

- [SimpleConstraintSoundProfile](/docs/api/shared/schemadefinitions/simpleconstraintsoundprofile)

**TravelSoundBack** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L24)

```csharp
ref CUtlSymbolLarge TravelSoundBack { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**TravelSoundFwd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L22)

```csharp
ref CUtlSymbolLarge TravelSoundFwd { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

