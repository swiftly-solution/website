---
title: CVoiceContainerSelector
---

```csharp
public interface CVoiceContainerSelector : CVoiceContainerBase, ISchemaClass<CVoiceContainerBase>, ISchemaClass<CVoiceContainerSelector>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Mode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerSelector.cs#L17)

```csharp
ref PlayBackMode_t Mode { get; }
```

#### Property Value

- [PlayBackMode_t](/docs/api/shared/schemadefinitions/playbackmode_t)

### ProbabilityWeights

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerSelector.cs#L21)

```csharp
ref CUtlVector<float> ProbabilityWeights { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### SoundsToPlay

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerSelector.cs#L19)

```csharp
CSoundContainerReferenceArray SoundsToPlay { get; }
```

#### Property Value

- [CSoundContainerReferenceArray](/docs/api/shared/schemadefinitions/csoundcontainerreferencearray)

