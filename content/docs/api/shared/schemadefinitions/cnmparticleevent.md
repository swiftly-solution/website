---
title: CNmParticleEvent
---

```csharp
public interface CNmParticleEvent : CNmEvent, ISchemaClass<CNmEvent>, ISchemaClass<CNmParticleEvent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AttachmentPoint0

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L31)

```csharp
string AttachmentPoint0 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### AttachmentPoint1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L35)

```csharp
string AttachmentPoint1 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### AttachmentType0

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L33)

```csharp
ref ParticleAttachment_t AttachmentType0 { get; }
```

#### Property Value

- [ParticleAttachment_t](/docs/api/shared/schemadefinitions/particleattachment_t)

### AttachmentType1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L37)

```csharp
ref ParticleAttachment_t AttachmentType1 { get; }
```

#### Property Value

- [ParticleAttachment_t](/docs/api/shared/schemadefinitions/particleattachment_t)

### Config

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L39)

```csharp
string Config { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DetachFromOwner

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L27)

```csharp
ref bool DetachFromOwner { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EffectForConfig

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L41)

```csharp
string EffectForConfig { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ParticleSystem

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L21)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> ParticleSystem { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### PlayEndCap

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L29)

```csharp
ref bool PlayEndCap { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Relevance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L17)

```csharp
ref CNmEventRelevance_t Relevance { get; }
```

#### Property Value

- [CNmEventRelevance_t](/docs/api/shared/schemadefinitions/cnmeventrelevance_t)

### StopImmediately

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L25)

```csharp
ref bool StopImmediately { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Tags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L23)

```csharp
string Tags { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Type

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L19)

```csharp
ref CNmParticleEvent__Type_t Type { get; }
```

#### Property Value

- [CNmParticleEvent__Type_t](/docs/api/shared/schemadefinitions/cnmparticleevent__type_t)

