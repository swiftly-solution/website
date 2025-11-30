---
title: CSoundContainerReference
---

# Interface CSoundContainerReference

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundContainerReference.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSoundContainerReference : ISchemaClass<CSoundContainerReference>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CSoundContainerReference>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Sound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundContainerReference.cs#L20)

```csharp
ref CStrongHandle<InfoForResourceTypeCVoiceContainerBase> Sound { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCVoiceContainerBase](/docs/api/schemadefinitions/infoforresourcetypecvoicecontainerbase)>

### Sound1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundContainerReference.cs#L22)

```csharp
CVoiceContainerBase? Sound1 { get; }
```

#### Property Value

- [CVoiceContainerBase](/docs/api/schemadefinitions/cvoicecontainerbase)?

### UseReference

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundContainerReference.cs#L18)

```csharp
ref bool UseReference { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

