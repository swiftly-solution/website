---
title: CParticleAnimTag
---

# Interface CParticleAnimTag

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CParticleAnimTag : CAnimTagBase, ISchemaClass<CAnimTagBase>, ISchemaClass<CParticleAnimTag>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CAnimTagBase](/docs/api/schemadefinitions/canimtagbase)
- [ISchemaClass<CAnimTagBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleAnimTag>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Aggregate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L26)

```csharp
ref bool Aggregate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AttachmentCP1Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L36)

```csharp
string AttachmentCP1Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### AttachmentCP1Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L38)

```csharp
ref ParticleAttachment_t AttachmentCP1Type { get; }
```

#### Property Value

- [ParticleAttachment_t](/docs/api/schemadefinitions/particleattachment_t)

### AttachmentName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L32)

```csharp
string AttachmentName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### AttachmentType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L34)

```csharp
ref ParticleAttachment_t AttachmentType { get; }
```

#### Property Value

- [ParticleAttachment_t](/docs/api/schemadefinitions/particleattachment_t)

### ConfigName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L22)

```csharp
string ConfigName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DetachFromOwner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L24)

```csharp
ref bool DetachFromOwner { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParticleSystem

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> ParticleSystem { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

### ParticleSystemName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L20)

```csharp
string ParticleSystemName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### StopWhenTagEnds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L28)

```csharp
ref bool StopWhenTagEnds { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TagEndStopIsInstant

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L30)

```csharp
ref bool TagEndStopIsInstant { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

