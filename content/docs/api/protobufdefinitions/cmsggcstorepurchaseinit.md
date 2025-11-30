---
title: CMsgGCStorePurchaseInit
---

# Interface CMsgGCStorePurchaseInit

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInit.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCStorePurchaseInit : ITypedProtobuf<CMsgGCStorePurchaseInit>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCStorePurchaseInit>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Country

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInit.cs#L13)

```csharp
string Country { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Currency

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInit.cs#L19)

```csharp
int Currency { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Language

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInit.cs#L16)

```csharp
int Language { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LineItems

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCStorePurchaseInit.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CGCStorePurchaseInit_LineItem> LineItems { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CGCStorePurchaseInit_LineItem](/docs/api/protobufdefinitions/cgcstorepurchaseinit_lineitem)>

