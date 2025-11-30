---
title: CAudioSentence
---

# Interface CAudioSentence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioSentence.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAudioSentence : ISchemaClass<CAudioSentence>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAudioSentence>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### EmphasisSamples

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioSentence.cs#L22)

```csharp
ref CUtlVector<CAudioEmphasisSample> EmphasisSamples { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAudioEmphasisSample](/docs/api/schemadefinitions/caudioemphasissample)>

### MorphData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioSentence.cs#L24)

```csharp
CAudioMorphData MorphData { get; }
```

#### Property Value

- [CAudioMorphData](/docs/api/schemadefinitions/caudiomorphdata)

### RunTimePhonemes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioSentence.cs#L20)

```csharp
ref CUtlVector<CAudioPhonemeTag> RunTimePhonemes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAudioPhonemeTag](/docs/api/schemadefinitions/caudiophonemetag)>

### ShouldVoiceDuck

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioSentence.cs#L18)

```csharp
ref bool ShouldVoiceDuck { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

