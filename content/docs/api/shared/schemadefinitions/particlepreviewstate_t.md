---
title: ParticlePreviewState_t
---

```csharp
public interface ParticlePreviewState_t : ISchemaClass<ParticlePreviewState_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AnimationNonLooping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L46)

```csharp
ref bool AnimationNonLooping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BodyGroups

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L32)

```csharp
ref CUtlVector<ParticlePreviewBodyGroup_t> BodyGroups { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ParticlePreviewBodyGroup_t](/docs/api/shared/schemadefinitions/particlepreviewbodygroup_t)>

### FireParticleOnSequenceFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L26)

```csharp
ref int FireParticleOnSequenceFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GroundType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L22)

```csharp
ref PetGroundType_t GroundType { get; }
```

#### Property Value

- [PetGroundType_t](/docs/api/shared/schemadefinitions/petgroundtype_t)

### HitboxSetName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L28)

```csharp
string HitboxSetName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaterialGroupName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L30)

```csharp
string MaterialGroupName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ModSpecificData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L20)

```csharp
ref uint ModSpecificData { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ParticleSimulationRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L36)

```csharp
ref float ParticleSimulationRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PlaybackSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L34)

```csharp
ref float PlaybackSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PreviewGravity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L50)

```csharp
ref Vector PreviewGravity { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### PreviewModel

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L18)

```csharp
string PreviewModel { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SequenceName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L24)

```csharp
string SequenceName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SequenceNameIsAnimClipPath

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L48)

```csharp
ref bool SequenceNameIsAnimClipPath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldDrawAttachmentNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L42)

```csharp
ref bool ShouldDrawAttachmentNames { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldDrawAttachments

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L40)

```csharp
ref bool ShouldDrawAttachments { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldDrawControlPointAxes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L44)

```csharp
ref bool ShouldDrawControlPointAxes { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldDrawHitboxes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L38)

```csharp
ref bool ShouldDrawHitboxes { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

