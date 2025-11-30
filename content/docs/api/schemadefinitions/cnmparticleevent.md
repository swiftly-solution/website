---
title: CNmParticleEvent
---

# Interface CNmParticleEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmParticleEvent : CNmEvent, ISchemaClass<CNmEvent>, ISchemaClass<CNmParticleEvent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CNmEvent](/docs/api/schemadefinitions/cnmevent)
- [ISchemaClass<CNmEvent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmParticleEvent>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AttachmentPoint0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L32)

```csharp
string AttachmentPoint0 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### AttachmentPoint1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L36)

```csharp
string AttachmentPoint1 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### AttachmentType0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L34)

```csharp
ref ParticleAttachment_t AttachmentType0 { get; }
```

#### Property Value

- [ParticleAttachment_t](/docs/api/schemadefinitions/particleattachment_t)

### AttachmentType1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L38)

```csharp
ref ParticleAttachment_t AttachmentType1 { get; }
```

#### Property Value

- [ParticleAttachment_t](/docs/api/schemadefinitions/particleattachment_t)

### Config

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L40)

```csharp
string Config { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DetachFromOwner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L28)

```csharp
ref bool DetachFromOwner { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EffectForConfig

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L42)

```csharp
string EffectForConfig { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ParticleSystem

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L22)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> ParticleSystem { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### PlayEndCap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L30)

```csharp
ref bool PlayEndCap { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Relevance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L18)

```csharp
ref CNmEventRelevance_t Relevance { get; }
```

#### Property Value

- [CNmEventRelevance_t](/docs/api/schemadefinitions/cnmeventrelevance_t)

### StopImmediately

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L26)

```csharp
ref bool StopImmediately { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Tags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L24)

```csharp
string Tags { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L20)

```csharp
ref CNmParticleEvent__Type_t Type { get; }
```

#### Property Value

- [CNmParticleEvent__Type_t](/docs/api/schemadefinitions/cnmparticleevent__type_t)

