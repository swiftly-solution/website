---
title: CVoiceContainerEnvelopeAnalyzer
---

```csharp
public interface CVoiceContainerEnvelopeAnalyzer : CVoiceContainerAnalysisBase, ISchemaClass<CVoiceContainerAnalysisBase>, ISchemaClass<CVoiceContainerEnvelopeAnalyzer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AnalysisWindowMs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerEnvelopeAnalyzer.cs#L18)

```csharp
ref float AnalysisWindowMs { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Mode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerEnvelopeAnalyzer.cs#L16)

```csharp
ref EMode_t Mode { get; }
```

#### Property Value

- [EMode_t](/docs/api/shared/schemadefinitions/emode_t)

**Threshold** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerEnvelopeAnalyzer.cs#L20)

```csharp
ref float Threshold { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

