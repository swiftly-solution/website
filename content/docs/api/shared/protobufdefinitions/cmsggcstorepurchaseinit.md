---
title: CMsgGCStorePurchaseInit
---

```csharp
public interface CMsgGCStorePurchaseInit : ITypedProtobuf<CMsgGCStorePurchaseInit>, INativeHandle
```

#### Implements

## Properties

### **Country** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInit.cs#L13)

```csharp
string Country { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Currency** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInit.cs#L19)

```csharp
int Currency { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Language** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInit.cs#L16)

```csharp
int Language { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **LineItems** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInit.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CGCStorePurchaseInit_LineItem> LineItems { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CGCStorePurchaseInit_LineItem](/docs/api/shared/protobufdefinitions/cgcstorepurchaseinit_lineitem)>

