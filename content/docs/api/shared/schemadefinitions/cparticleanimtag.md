---
title: CParticleAnimTag
---

```csharp
public interface CParticleAnimTag : CAnimTagBase, ISchemaClass<CAnimTagBase>, ISchemaClass<CParticleAnimTag>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Aggregate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L24)

```csharp
ref bool Aggregate { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**AttachmentCP1Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L34)

```csharp
string AttachmentCP1Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**AttachmentCP1Type** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L36)

```csharp
ref ParticleAttachment_t AttachmentCP1Type { get; }
```

#### Property Value

- [ParticleAttachment_t](/docs/api/shared/schemadefinitions/particleattachment_t)

**AttachmentName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L30)

```csharp
string AttachmentName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**AttachmentType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L32)

```csharp
ref ParticleAttachment_t AttachmentType { get; }
```

#### Property Value

- [ParticleAttachment_t](/docs/api/shared/schemadefinitions/particleattachment_t)

**ConfigName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L20)

```csharp
string ConfigName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**DetachFromOwner** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L22)

```csharp
ref bool DetachFromOwner { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ParticleSystem** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L16)

```csharp
ref CStrongHandle<InfoForResourceTypeIParticleSystemDefinition> ParticleSystem { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIParticleSystemDefinition](/docs/api/shared/schemadefinitions/infoforresourcetypeiparticlesystemdefinition)>

**ParticleSystemName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L18)

```csharp
string ParticleSystemName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**StopWhenTagEnds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L26)

```csharp
ref bool StopWhenTagEnds { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**TagEndStopIsInstant** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleAnimTag.cs#L28)

```csharp
ref bool TagEndStopIsInstant { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

