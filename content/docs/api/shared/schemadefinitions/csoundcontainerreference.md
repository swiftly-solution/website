---
title: CSoundContainerReference
---

```csharp
public interface CSoundContainerReference : ISchemaClass<CSoundContainerReference>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Sound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundContainerReference.cs#L20)

```csharp
ref CStrongHandle<InfoForResourceTypeCVoiceContainerBase> Sound { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCVoiceContainerBase](/docs/api/shared/schemadefinitions/infoforresourcetypecvoicecontainerbase)>

### Sound1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundContainerReference.cs#L22)

```csharp
CVoiceContainerBase? Sound1 { get; }
```

#### Property Value

- [CVoiceContainerBase](/docs/api/shared/schemadefinitions/cvoicecontainerbase)?

### UseReference

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundContainerReference.cs#L18)

```csharp
ref bool UseReference { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

