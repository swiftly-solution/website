---
title: CMoodVData
---

# Interface CMoodVData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoodVData.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMoodVData : ISchemaClass<CMoodVData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CMoodVData>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnimationLayers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoodVData.cs#L23)

```csharp
ref CUtlVector<MoodAnimationLayer_t> AnimationLayers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MoodAnimationLayer_t](/docs/api/schemadefinitions/moodanimationlayer_t)>

### ModelName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoodVData.cs#L19)

```csharp
SchemaUntypedField ModelName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### MoodType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMoodVData.cs#L21)

```csharp
ref MoodType_t MoodType { get; }
```

#### Property Value

- [MoodType_t](/docs/api/schemadefinitions/moodtype_t)

