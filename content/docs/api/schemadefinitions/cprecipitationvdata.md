---
title: CPrecipitationVData
---

# Interface CPrecipitationVData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPrecipitationVData.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPrecipitationVData : CEntitySubclassVDataBase, ISchemaClass<CEntitySubclassVDataBase>, ISchemaClass<CPrecipitationVData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CEntitySubclassVDataBase](/docs/api/schemadefinitions/centitysubclassvdatabase)
- [ISchemaClass<CEntitySubclassVDataBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPrecipitationVData>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AttachType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPrecipitationVData.cs#L23)

```csharp
ref ParticleAttachment_t AttachType { get; }
```

#### Property Value

- [ParticleAttachment_t](/docs/api/schemadefinitions/particleattachment_t)

### BatchSameVolumeType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPrecipitationVData.cs#L25)

```csharp
ref bool BatchSameVolumeType { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InnerDistance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPrecipitationVData.cs#L21)

```csharp
ref float InnerDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Modifier

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPrecipitationVData.cs#L31)

```csharp
string Modifier { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ParticlePrecipitationEffect

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPrecipitationVData.cs#L19)

```csharp
SchemaUntypedField ParticlePrecipitationEffect { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### RTEnvCP

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPrecipitationVData.cs#L27)

```csharp
ref int RTEnvCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RTEnvCPComponent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPrecipitationVData.cs#L29)

```csharp
ref int RTEnvCPComponent { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

