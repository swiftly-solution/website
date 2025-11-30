---
title: CVoiceContainerEnvelopeAnalyzer
---

# Interface CVoiceContainerEnvelopeAnalyzer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerEnvelopeAnalyzer.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CVoiceContainerEnvelopeAnalyzer : CVoiceContainerAnalysisBase, ISchemaClass<CVoiceContainerAnalysisBase>, ISchemaClass<CVoiceContainerEnvelopeAnalyzer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CVoiceContainerAnalysisBase](/docs/api/schemadefinitions/cvoicecontaineranalysisbase)
- [ISchemaClass<CVoiceContainerAnalysisBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CVoiceContainerEnvelopeAnalyzer>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AnalysisWindowMs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerEnvelopeAnalyzer.cs#L20)

```csharp
ref float AnalysisWindowMs { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Mode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerEnvelopeAnalyzer.cs#L18)

```csharp
ref EMode_t Mode { get; }
```

#### Property Value

- [EMode_t](/docs/api/schemadefinitions/emode_t)

### Threshold

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerEnvelopeAnalyzer.cs#L22)

```csharp
ref float Threshold { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

