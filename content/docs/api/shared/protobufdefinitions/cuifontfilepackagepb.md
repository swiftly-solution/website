---
title: CUIFontFilePackagePB
---

```csharp
public interface CUIFontFilePackagePB : ITypedProtobuf<CUIFontFilePackagePB>, INativeHandle
```

#### Implements

## Properties

### **EncryptedFontFiles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUIFontFilePackagePB.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CUIFontFilePackagePB_CUIEncryptedFontFilePB> EncryptedFontFiles { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CUIFontFilePackagePB_CUIEncryptedFontFilePB](/docs/api/shared/protobufdefinitions/cuifontfilepackagepb_cuiencryptedfontfilepb)>

### **PackageVersion** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUIFontFilePackagePB.cs#L13)

```csharp
uint PackageVersion { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

