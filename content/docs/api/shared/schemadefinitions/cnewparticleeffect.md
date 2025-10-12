---
title: CNewParticleEffect
---

```csharp
public interface CNewParticleEffect : IParticleEffect, ISchemaClass<IParticleEffect>, ISchemaClass<CNewParticleEffect>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AggregationCenter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L89)

```csharp
ref Vector AggregationCenter { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Allocated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L40)

```csharp
SchemaUntypedField Allocated { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### AutoUpdateBBox

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L37)

```csharp
SchemaUntypedField AutoUpdateBBox { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### CanFreeze

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L81)

```csharp
ref bool CanFreeze { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DebugName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L22)

```csharp
string DebugName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DontRemove

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L25)

```csharp
SchemaUntypedField DontRemove { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ForceNoDraw

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L49)

```csharp
SchemaUntypedField ForceNoDraw { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### FreezeTargetState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L79)

```csharp
ref bool FreezeTargetState { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FreezeTransitionActive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L77)

```csharp
ref bool FreezeTransitionActive { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FreezeTransitionDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L73)

```csharp
ref float FreezeTransitionDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FreezeTransitionOverride

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L75)

```csharp
ref float FreezeTransitionOverride { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FreezeTransitionStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L71)

```csharp
ref float FreezeTransitionStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IsFirstFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L34)

```csharp
SchemaUntypedField IsFirstFrame { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### LastMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L85)

```csharp
ref Vector LastMax { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### LastMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L83)

```csharp
ref Vector LastMin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### NeedsBBoxUpdate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L31)

```csharp
SchemaUntypedField NeedsBBoxUpdate { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Next

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L16)

```csharp
CNewParticleEffect? Next { get; }
```

#### Property Value

- [CNewParticleEffect](/docs/api/shared/schemadefinitions/cnewparticleeffect)?

### Owner

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L67)

```csharp
PARTICLE_EHANDLE__? Owner { get; }
```

#### Property Value

- [PARTICLE_EHANDLE__](/docs/api/shared/schemadefinitions/particle_ehandle__)?

### OwningParticleProperty

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L69)

```csharp
CParticleProperty? OwningParticleProperty { get; }
```

#### Property Value

- [CParticleProperty](/docs/api/shared/schemadefinitions/cparticleproperty)?

### Particles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L20)

```csharp
IParticleCollection? Particles { get; }
```

#### Property Value

- [IParticleCollection](/docs/api/shared/schemadefinitions/iparticlecollection)?

### Prev

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L18)

```csharp
CNewParticleEffect? Prev { get; }
```

#### Property Value

- [CNewParticleEffect](/docs/api/shared/schemadefinitions/cnewparticleeffect)?

### RefCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L91)

```csharp
ref int RefCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Remove

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L28)

```csharp
SchemaUntypedField Remove { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Scale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L65)

```csharp
ref float Scale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ShouldCheckFoW

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L61)

```csharp
SchemaUntypedField ShouldCheckFoW { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ShouldPerformCullCheck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L46)

```csharp
SchemaUntypedField ShouldPerformCullCheck { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ShouldSave

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L55)

```csharp
SchemaUntypedField ShouldSave { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ShouldSimulateDuringGamePaused

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L58)

```csharp
SchemaUntypedField ShouldSimulateDuringGamePaused { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Simulate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L43)

```csharp
SchemaUntypedField Simulate { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### SortOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L63)

```csharp
ref Vector SortOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SplitScreenUser

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L87)

```csharp
ref uint SplitScreenUser { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SuppressScreenSpaceEffect

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNewParticleEffect.cs#L52)

```csharp
SchemaUntypedField SuppressScreenSpaceEffect { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

