---
title: ConstraintSoundInfo
---

```csharp
public interface ConstraintSoundInfo : ISchemaClass<ConstraintSoundInfo>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **ForwardAxis** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L20)

```csharp
ref Vector ForwardAxis { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **PlayReversalSound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L30)

```csharp
ref bool PlayReversalSound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **PlayTravelSound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L28)

```csharp
ref bool PlayTravelSound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ReversalSounds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L26)

```csharp
string ReversalSounds { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Sampler** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L16)

```csharp
VelocitySampler Sampler { get; }
```

#### Property Value

- [VelocitySampler](/docs/api/shared/schemadefinitions/velocitysampler)

### **SoundProfile** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L18)

```csharp
SimpleConstraintSoundProfile SoundProfile { get; }
```

#### Property Value

- [SimpleConstraintSoundProfile](/docs/api/shared/schemadefinitions/simpleconstraintsoundprofile)

### **TravelSoundBack** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L24)

```csharp
string TravelSoundBack { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **TravelSoundFwd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ConstraintSoundInfo.cs#L22)

```csharp
string TravelSoundFwd { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

