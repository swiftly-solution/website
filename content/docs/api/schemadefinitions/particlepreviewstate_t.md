---
title: ParticlePreviewState_t
---

# Interface ParticlePreviewState_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ParticlePreviewState_t : ISchemaClass<ParticlePreviewState_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<ParticlePreviewState_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnimationNonLooping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L46)

```csharp
ref bool AnimationNonLooping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BodyGroups

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L32)

```csharp
ref CUtlVector<ParticlePreviewBodyGroup_t> BodyGroups { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ParticlePreviewBodyGroup_t](/docs/api/schemadefinitions/particlepreviewbodygroup_t)>

### FireParticleOnSequenceFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L26)

```csharp
ref int FireParticleOnSequenceFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GroundType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L22)

```csharp
ref PetGroundType_t GroundType { get; }
```

#### Property Value

- [PetGroundType_t](/docs/api/schemadefinitions/petgroundtype_t)

### HitboxSetName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L28)

```csharp
string HitboxSetName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaterialGroupName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L30)

```csharp
string MaterialGroupName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ModSpecificData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L20)

```csharp
ref uint ModSpecificData { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ParticleSimulationRate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L36)

```csharp
ref float ParticleSimulationRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PlaybackSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L34)

```csharp
ref float PlaybackSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PreviewGravity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L50)

```csharp
ref Vector PreviewGravity { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### PreviewModel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L18)

```csharp
string PreviewModel { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SequenceName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L24)

```csharp
string SequenceName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SequenceNameIsAnimClipPath

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L48)

```csharp
ref bool SequenceNameIsAnimClipPath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldDrawAttachmentNames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L42)

```csharp
ref bool ShouldDrawAttachmentNames { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldDrawAttachments

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L40)

```csharp
ref bool ShouldDrawAttachments { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldDrawControlPointAxes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L44)

```csharp
ref bool ShouldDrawControlPointAxes { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldDrawHitboxes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ParticlePreviewState_t.cs#L38)

```csharp
ref bool ShouldDrawHitboxes { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

