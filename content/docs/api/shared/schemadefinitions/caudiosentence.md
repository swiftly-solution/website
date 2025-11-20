---
title: CAudioSentence
---

```csharp
public interface CAudioSentence : ISchemaClass<CAudioSentence>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### EmphasisSamples

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioSentence.cs#L22)

```csharp
ref CUtlVector<CAudioEmphasisSample> EmphasisSamples { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAudioEmphasisSample](/docs/api/shared/schemadefinitions/caudioemphasissample)>

### MorphData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioSentence.cs#L24)

```csharp
CAudioMorphData MorphData { get; }
```

#### Property Value

- [CAudioMorphData](/docs/api/shared/schemadefinitions/caudiomorphdata)

### RunTimePhonemes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioSentence.cs#L20)

```csharp
ref CUtlVector<CAudioPhonemeTag> RunTimePhonemes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAudioPhonemeTag](/docs/api/shared/schemadefinitions/caudiophonemetag)>

### ShouldVoiceDuck

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAudioSentence.cs#L18)

```csharp
ref bool ShouldVoiceDuck { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

