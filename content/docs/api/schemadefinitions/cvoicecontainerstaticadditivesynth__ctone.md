---
title: CVoiceContainerStaticAdditiveSynth__CTone
---

# Interface CVoiceContainerStaticAdditiveSynth__CTone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerStaticAdditiveSynth__CTone.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CVoiceContainerStaticAdditiveSynth__CTone : ISchemaClass<CVoiceContainerStaticAdditiveSynth__CTone>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CVoiceContainerStaticAdditiveSynth__CTone>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Curve

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerStaticAdditiveSynth__CTone.cs#L21)

```csharp
SchemaUntypedField Curve { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Harmonics

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerStaticAdditiveSynth__CTone.cs#L18)

```csharp
ref CUtlVector<CVoiceContainerStaticAdditiveSynth__CHarmonic> Harmonics { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CVoiceContainerStaticAdditiveSynth__CHarmonic](/docs/api/schemadefinitions/cvoicecontainerstaticadditivesynth__charmonic)>

### SyncInstances

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerStaticAdditiveSynth__CTone.cs#L23)

```csharp
ref bool SyncInstances { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

