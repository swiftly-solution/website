---
title: CMoodVData
---

```csharp
public interface CMoodVData : ISchemaClass<CMoodVData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AnimationLayers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoodVData.cs#L23)

```csharp
ref CUtlVector<MoodAnimationLayer_t> AnimationLayers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[MoodAnimationLayer_t](/docs/api/shared/schemadefinitions/moodanimationlayer_t)>

### ModelName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoodVData.cs#L19)

```csharp
SchemaUntypedField ModelName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### MoodType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoodVData.cs#L21)

```csharp
ref MoodType_t MoodType { get; }
```

#### Property Value

- [MoodType_t](/docs/api/shared/schemadefinitions/moodtype_t)

