---
title: CVoiceContainerEnvelope
---

```csharp
public interface CVoiceContainerEnvelope : CVoiceContainerBase, ISchemaClass<CVoiceContainerBase>, ISchemaClass<CVoiceContainerEnvelope>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AnalysisContainer

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerEnvelope.cs#L20)

```csharp
CVoiceContainerAnalysisBase? AnalysisContainer { get; }
```

#### Property Value

- [CVoiceContainerAnalysisBase](/docs/api/shared/schemadefinitions/cvoicecontaineranalysisbase)?

### Sound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerEnvelope.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeCVoiceContainerBase> Sound { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCVoiceContainerBase](/docs/api/shared/schemadefinitions/infoforresourcetypecvoicecontainerbase)>

