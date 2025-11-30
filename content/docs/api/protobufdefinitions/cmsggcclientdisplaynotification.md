---
title: CMsgGCClientDisplayNotification
---

# Interface CMsgGCClientDisplayNotification

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCClientDisplayNotification.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCClientDisplayNotification : ITypedProtobuf<CMsgGCClientDisplayNotification>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCClientDisplayNotification>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BodySubstringKeys

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCClientDisplayNotification.cs#L19)

```csharp
IProtobufRepeatedFieldValueType<string> BodySubstringKeys { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### BodySubstringValues

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCClientDisplayNotification.cs#L22)

```csharp
IProtobufRepeatedFieldValueType<string> BodySubstringValues { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### NotificationBodyLocalizationKey

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCClientDisplayNotification.cs#L16)

```csharp
string NotificationBodyLocalizationKey { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NotificationTitleLocalizationKey

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCClientDisplayNotification.cs#L13)

```csharp
string NotificationTitleLocalizationKey { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

