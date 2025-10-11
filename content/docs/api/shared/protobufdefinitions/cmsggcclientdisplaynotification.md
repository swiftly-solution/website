---
title: CMsgGCClientDisplayNotification
---

```csharp
public interface CMsgGCClientDisplayNotification : ITypedProtobuf<CMsgGCClientDisplayNotification>, INativeHandle
```

#### Implements

## Properties

### **BodySubstringKeys** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCClientDisplayNotification.cs#L19)

```csharp
IProtobufRepeatedFieldValueType<string> BodySubstringKeys { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### **BodySubstringValues** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCClientDisplayNotification.cs#L22)

```csharp
IProtobufRepeatedFieldValueType<string> BodySubstringValues { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### **NotificationBodyLocalizationKey** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCClientDisplayNotification.cs#L16)

```csharp
string NotificationBodyLocalizationKey { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **NotificationTitleLocalizationKey** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCClientDisplayNotification.cs#L13)

```csharp
string NotificationTitleLocalizationKey { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

