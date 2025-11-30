---
title: CUIFontFilePackagePB
---

# Interface CUIFontFilePackagePB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUIFontFilePackagePB.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CUIFontFilePackagePB : ITypedProtobuf<CUIFontFilePackagePB>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CUIFontFilePackagePB>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### EncryptedFontFiles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUIFontFilePackagePB.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CUIFontFilePackagePB_CUIEncryptedFontFilePB> EncryptedFontFiles { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CUIFontFilePackagePB_CUIEncryptedFontFilePB](/docs/api/protobufdefinitions/cuifontfilepackagepb_cuiencryptedfontfilepb)>

### PackageVersion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUIFontFilePackagePB.cs#L13)

```csharp
uint PackageVersion { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

