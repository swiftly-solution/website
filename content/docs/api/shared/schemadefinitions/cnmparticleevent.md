---
title: CNmParticleEvent
---

```csharp
public interface CNmParticleEvent : CNmEvent, ISchemaClass<CNmEvent>, ISchemaClass<CNmParticleEvent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AttachmentPoint0** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L30)

```csharp
string AttachmentPoint0 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **AttachmentPoint1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L34)

```csharp
string AttachmentPoint1 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **AttachmentType0** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L32)

```csharp
ref ParticleAttachment_t AttachmentType0 { get; }
```

#### Property Value

- [ParticleAttachment_t](/docs/api/shared/schemadefinitions/particleattachment_t)

### **AttachmentType1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L36)

```csharp
ref ParticleAttachment_t AttachmentType1 { get; }
```

#### Property Value

- [ParticleAttachment_t](/docs/api/shared/schemadefinitions/particleattachment_t)

### **Config** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L38)

```csharp
string Config { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **DetachFromOwner** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L26)

```csharp
ref bool DetachFromOwner { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **EffectForConfig** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L40)

```csharp
string EffectForConfig { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **ParticleSystem** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L20)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> ParticleSystem { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### **PlayEndCap** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L28)

```csharp
ref bool PlayEndCap { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Relevance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L16)

```csharp
ref CNmEventRelevance_t Relevance { get; }
```

#### Property Value

- [CNmEventRelevance_t](/docs/api/shared/schemadefinitions/cnmeventrelevance_t)

### **StopImmediately** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L24)

```csharp
ref bool StopImmediately { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Tags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L22)

```csharp
string Tags { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Type** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParticleEvent.cs#L18)

```csharp
ref CNmParticleEvent__Type_t Type { get; }
```

#### Property Value

- [CNmParticleEvent__Type_t](/docs/api/shared/schemadefinitions/cnmparticleevent__type_t)

